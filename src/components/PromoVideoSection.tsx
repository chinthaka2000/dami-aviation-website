import { useState, useRef, useEffect } from 'react';

const isElementInViewport = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
import { VolumeX, Volume2 } from 'lucide-react';

interface PromoVideoSectionProps {
  // Optional YouTube video ID for the promo video (e.g., "abc123XYZ").
  // If not provided, the section will render a placeholder message.
  youtubeId?: string;
}

const PromoVideoSection: React.FC<PromoVideoSectionProps> = ({ youtubeId }) => {
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    const videoElement = iframeRef.current;
    if (videoElement) {
      videoElement.muted = !videoElement.muted;
      setIsMuted(videoElement.muted);
    }
  };

  const handleVideoClick = () => {
    const videoElement = iframeRef.current;
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play().catch(() => {
          // Autoplay might be blocked
        });
      } else {
        videoElement.pause();
      }
    }
  };

  useEffect(() => {
    const videoElement = iframeRef.current;
    if (videoElement) {
      videoElement.muted = false; // default unmuted
      videoElement.play().catch(() => {
        // Autoplay might be blocked, handle if needed
      });
      setIsMuted(false);
    }
  }, []);

  return (
    <section className="py-20 bg-[#0f2942] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute right-0 top-1/4 w-64 h-64 rounded-full bg-[#B5054A]/10 blur-3xl"></div>
      <div className="absolute left-0 bottom-1/4 w-96 h-96 rounded-full bg-[#D4175C]/10 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            DAMI Merchandise
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Discover our official DAMI Aviation T‑shirt and wristband. Represent excellence in and out of training.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-[#0a1929]/50 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 shadow-xl">
            {youtubeId ? (
              <div className="relative w-full pb-[177.78%] md:pb-[56.25%]" style={{ height: 0 }}>
                <video
                  ref={iframeRef}
                  playsInline
                  poster="https://res.cloudinary.com/dzz0qlqve/image/upload/v1757521693/Dami_T-shirt/ending_post_3_rcl4wk.jpg"
                  className="absolute top-0 left-0 w-full h-full rounded-xl cursor-pointer"
                  src="https://res.cloudinary.com/dzz0qlqve/video/upload/v1757521696/Dami_T-shirt/Dami_T-Shit_R5_op3dhw.mp4"
                  controls
                  autoPlay
                  muted={isMuted}
                  onClick={handleVideoClick}
                  title="DAMI Merchandise Promo Video"
                  style={{ border: 'none' }}
                />

                {/* Mute/Unmute Button */}
                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <div className="w-full max-w-3xl aspect-video bg-[#0a1929] rounded-xl border border-white/10 flex items-center justify-center text-gray-400">
                  Promo video coming soon
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  Our merchandise showcase video will be available here shortly.
                </p>
              </div>
            )}

            <div className="text-center mt-6">
              <p className="text-gray-300">
                Show your passion for aviation and the DAMI community
              </p>
              {youtubeId && (
                <p className="text-gray-400 text-sm mt-2">
                  {isMuted ? 'Click the video or sound icon to hear audio' : 'Audio is now enabled'}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoVideoSection;
