import type { Metadata } from "next";
import { Navbar } from "../../components/layout/Navbar";

export const metadata: Metadata = {
    title: "Self Building Instructions | PurrfectSnap",
    description: "Simple self-build guide for PurrfectSnap release APKs.",
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

                    <div className="mt-8 space-y-6">
                        <article className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6">
                            <h2 className="text-xl md:text-2xl font-bold mb-3">1. Requirements</h2>
                            <ul className="list-disc pl-5 text-sm md:text-base text-gray-300 space-y-2">
                                <li>JDK 21</li>
                                <li>Android SDK 36 + Build Tools 36.0.0</li>
                                <li>Android NDK 28.2.13676358</li>
                                <li>Rust toolchain (rustup)</li>
                                <li>WSL2 on Windows (recommended)</li>
                            </ul>
                        </article>

                        <article className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6">
                            <h2 className="text-xl md:text-2xl font-bold mb-3">2. Clone</h2>
                            <pre className="rounded-2xl bg-black/40 border border-white/10 p-4 overflow-x-auto text-xs md:text-sm text-gray-200"><code>{`git clone https://github.com/particle-box/PurrfectSnap.git
cd PurrfectSnap`}</code></pre>
                        </article>

                        <article className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6">
                            <h2 className="text-xl md:text-2xl font-bold mb-3">3. Setup Signing Certificate (Required)</h2>
                            <p className="text-sm md:text-base text-gray-300 mb-3">
                                Release signing expects a keystore at <code>~/.android/purrfectsnap-release.keystore</code> and:
                                <code className="ml-1">PS_RELEASE_STORE_PASSWORD</code>,
                                <code className="ml-1">PS_RELEASE_KEY_ALIAS</code>,
                                <code className="ml-1">PS_RELEASE_KEY_PASSWORD</code>.
                            </p>
                            <pre className="rounded-2xl bg-black/40 border border-white/10 p-4 overflow-x-auto text-xs md:text-sm text-gray-200"><code>{`mkdir -p ~/.android

keytool -genkeypair \
  -v \
  -keystore ~/.android/purrfectsnap-release.keystore \
  -alias purrfectsnap \
  -keyalg RSA \
  -keysize 4096 \
  -validity 3650

export PS_RELEASE_STORE_PASSWORD='your_store_password'
export PS_RELEASE_KEY_ALIAS='purrfectsnap'
export PS_RELEASE_KEY_PASSWORD='your_key_password'`}</code></pre>
                        </article>

                        <article className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6">
                            <h2 className="text-xl md:text-2xl font-bold mb-3">4. Build Release APK</h2>
                            <p className="text-sm md:text-base text-gray-300 mb-3">
                                Pick one command based on the APK you want:
                            </p>
                            <pre className="rounded-2xl bg-black/40 border border-white/10 p-4 overflow-x-auto text-xs md:text-sm text-gray-200"><code>{`# arm64-v8a APK
./gradlew assembleArmv8Release

# armeabi-v7a APK
./gradlew assembleArmv7Release`}</code></pre>
                        </article>

                        <article className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6">
                            <h2 className="text-xl md:text-2xl font-bold mb-3">5. Output Location</h2>
                            <ul className="list-disc pl-5 text-sm md:text-base text-gray-300 space-y-2">
                                <li><code>app/build/outputs/apk/armv8/release/</code> for arm64 builds.</li>
                                <li><code>app/build/outputs/apk/armv7/release/</code> for armv7 builds.</li>
                            </ul>
                        </article>

                        <article className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6">
                            <h2 className="text-xl md:text-2xl font-bold mb-3">6. If Build Fails</h2>
                            <ul className="list-disc pl-5 text-sm md:text-base text-gray-300 space-y-2">
                                <li>Use WSL2 if building on Windows.</li>
                                <li>Install JDK 21 if missing.</li>
                                <li>Install Rust toolchain if requested by Gradle/native tasks.</li>
                                <li>Install Android SDK/NDK only if your environment does not already have them.</li>
                            </ul>
                        </article>

                        <article className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6">
                            <h2 className="text-xl md:text-2xl font-bold mb-3">7. Certificate Hash (Advanced)</h2>
                            <p className="text-sm md:text-base text-gray-300 mb-3">
                                If you hit integrity/signature mismatch, set <code>EXPECTED_CERT_SHA256</code> to your signing certificate hash.
                            </p>
                            <pre className="rounded-2xl bg-black/40 border border-white/10 p-4 overflow-x-auto text-xs md:text-sm text-gray-200"><code>{`keytool -list -v \
  -keystore ~/.android/purrfectsnap-release.keystore \
  -alias purrfectsnap \
  -storepass "$PS_RELEASE_STORE_PASSWORD" | grep "SHA256:"

./gradlew assembleArmv8Release -PEXPECTED_CERT_SHA256=<your_sha256_no_colons>`}</code></pre>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    );
}
