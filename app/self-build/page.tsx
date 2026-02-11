import type { Metadata } from "next";
import { Navbar } from "../../components/layout/Navbar";

export const metadata: Metadata = {
    title: "Self Building Instructions | PurrfectSnap",
    description: "Detailed local build guide for PurrfectSnap (WSL, signing, and release/debug APKs).",
};

export default function SelfBuildPage() {
    return (
        <main className="relative min-h-screen bg-aurora-dark text-white selection:bg-aurora-cyan selection:text-aurora-dark">
            <Navbar />

            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-[10%] -left-[20%] w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] bg-aurora-cyan/20 blur-[80px] md:blur-[100px] rounded-full animate-pulse-slow" />
                <div className="absolute -bottom-[10%] -right-[20%] w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] bg-aurora-pink/15 blur-[80px] md:blur-[100px] rounded-full animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            </div>

            <section className="relative z-10 pt-28 md:pt-32 pb-16 px-4 md:px-6">
                <div className="container mx-auto max-w-5xl">
                    <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-aurora-cyan/90 mb-3">
                        Self Building Instructions
                    </p>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                        Build PurrfectSnap From Source
                    </h1>
                    <p className="text-sm md:text-base text-gray-300 max-w-3xl">
                        This guide is based on the current project build logic in the Android source tree, including WSL-native requirements,
                        Rust/NDK integration, and signing certificate setup used by release builds.
                    </p>

                    <div className="mt-8 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-4 text-sm text-amber-100">
                        Source analyzed: <code className="text-amber-50">E:\New folder (5)\PurrfectSnap\PurrfectSnap</code>
                    </div>

                    <div className="mt-8 space-y-6">
                        <article className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6">
                            <h2 className="text-xl md:text-2xl font-bold mb-3">1. Required Environment</h2>
                            <ul className="list-disc pl-5 text-sm md:text-base text-gray-300 space-y-2">
                                <li>JDK 21 (project is configured with Java 21 source/target).</li>
                                <li>Android SDK Platform 36 and Build-Tools 36.0.0.</li>
                                <li>Android NDK 28.2.13676358.</li>
                                <li>Rust toolchain via rustup with Android targets:
                                    <code className="ml-1">aarch64-linux-android</code> and <code className="ml-1">armv7-linux-androideabi</code>.
                                </li>
                                <li>Node.js + npm available inside WSL (checked by <code>build-wsl.sh</code>).</li>
                                <li>A C compiler in WSL (<code>gcc</code> or <code>clang</code> via <code>build-essential</code>).</li>
                            </ul>
                        </article>

                        <article className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6">
                            <h2 className="text-xl md:text-2xl font-bold mb-3">2. Windows + WSL Setup (Recommended)</h2>
                            <p className="text-sm md:text-base text-gray-300 mb-3">
                                Native build scripts require O-MVLL and explicitly fail on plain Windows hosts. Use WSL2 (Ubuntu) for reliable builds.
                            </p>
                            <pre className="rounded-2xl bg-black/40 border border-white/10 p-4 overflow-x-auto text-xs md:text-sm text-gray-200"><code>{`# On Windows PowerShell (as admin)
wsl --install -d Ubuntu

# Then inside Ubuntu WSL
sudo apt update
sudo apt install -y openjdk-21-jdk unzip zip curl git build-essential

# Install Node.js LTS (example)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
source ~/.cargo/env

# Add required Android Rust targets
rustup target add aarch64-linux-android armv7-linux-androideabi`}</code></pre>
                        </article>

                        <article className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6">
                            <h2 className="text-xl md:text-2xl font-bold mb-3">3. Clone and Prepare</h2>
                            <pre className="rounded-2xl bg-black/40 border border-white/10 p-4 overflow-x-auto text-xs md:text-sm text-gray-200"><code>{`git clone https://github.com/particle-box/PurrfectSnap.git
cd PurrfectSnap
chmod +x gradlew build-wsl.sh native/build-native.sh`}</code></pre>
                            <p className="text-sm md:text-base text-gray-300 mt-3">
                                The project can auto-provision SDK tools in some flows, but local Android SDK/NDK setup is still recommended for stable builds.
                            </p>
                        </article>

                        <article className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6">
                            <h2 className="text-xl md:text-2xl font-bold mb-3">4. Signing Certificate (Release)</h2>
                            <p className="text-sm md:text-base text-gray-300 mb-3">
                                Release signing expects a keystore at <code>~/.android/purrfectsnap-release.keystore</code> and these values:
                                <code className="ml-1">PS_RELEASE_STORE_PASSWORD</code>,
                                <code className="ml-1">PS_RELEASE_KEY_ALIAS</code>,
                                <code className="ml-1">PS_RELEASE_KEY_PASSWORD</code>.
                            </p>
                            <pre className="rounded-2xl bg-black/40 border border-white/10 p-4 overflow-x-auto text-xs md:text-sm text-gray-200"><code>{`mkdir -p ~/.android

# Create new keystore (example)
keytool -genkeypair \
  -v \
  -keystore ~/.android/purrfectsnap-release.keystore \
  -alias purrfectsnap \
  -keyalg RSA \
  -keysize 4096 \
  -validity 3650

# Export signing vars for current shell
export PS_RELEASE_STORE_PASSWORD='your_store_password'
export PS_RELEASE_KEY_ALIAS='purrfectsnap'
export PS_RELEASE_KEY_PASSWORD='your_key_password'`}</code></pre>
                        </article>

                        <article className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6">
                            <h2 className="text-xl md:text-2xl font-bold mb-3">5. Certificate Hash Integrity (Important)</h2>
                            <p className="text-sm md:text-base text-gray-300 mb-3">
                                The app embeds an expected certificate SHA-256 (<code>EXPECTED_CERT_SHA256</code>). If this does not match your signing cert,
                                integrity checks may fail. Compute your cert hash and pass it via Gradle property or environment.
                            </p>
                            <pre className="rounded-2xl bg-black/40 border border-white/10 p-4 overflow-x-auto text-xs md:text-sm text-gray-200"><code>{`keytool -list -v \
  -keystore ~/.android/purrfectsnap-release.keystore \
  -alias purrfectsnap \
  -storepass "$PS_RELEASE_STORE_PASSWORD" | grep "SHA256:"

# Example one-off build override:
./gradlew assembleArmv8Release -PEXPECTED_CERT_SHA256=<your_sha256_no_colons>`}</code></pre>
                        </article>

                        <article className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6">
                            <h2 className="text-xl md:text-2xl font-bold mb-3">6. Build Commands</h2>
                            <p className="text-sm md:text-base text-gray-300 mb-3">
                                Use the helper script for WSL builds:
                            </p>
                            <pre className="rounded-2xl bg-black/40 border border-white/10 p-4 overflow-x-auto text-xs md:text-sm text-gray-200"><code>{`# Debug
./build-wsl.sh armv8 debug
./build-wsl.sh armv7 debug

# Release
./build-wsl.sh armv8 release
./build-wsl.sh armv7 release

# Other options
./build-wsl.sh all release
./build-wsl.sh core debug`}</code></pre>
                            <p className="text-sm md:text-base text-gray-300 mt-3">
                                Output path format: <code>app/build/outputs/apk/&lt;flavor&gt;/&lt;BuildType&gt;/</code>
                            </p>
                        </article>

                        <article className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6">
                            <h2 className="text-xl md:text-2xl font-bold mb-3">7. Common Issues</h2>
                            <ul className="list-disc pl-5 text-sm md:text-base text-gray-300 space-y-2">
                                <li><code>OMVLL requires a Linux/WSL environment</code>: run build inside WSL2.</li>
                                <li><code>No C compiler found</code>: install <code>build-essential</code> in WSL.</li>
                                <li><code>Unable to locate Android NDK</code>: install NDK 28.2.13676358 and set <code>ANDROID_NDK_HOME</code>.</li>
                                <li>Unsigned release output: ensure keystore exists at <code>~/.android/purrfectsnap-release.keystore</code> and signing vars are set.</li>
                                <li>Signature mismatch/integrity errors: set <code>EXPECTED_CERT_SHA256</code> to your release cert SHA-256.</li>
                            </ul>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    );
}

