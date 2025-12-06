import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Ciao Baby! - Armandito\'s Baby Shower'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
    // Font loading (optional, using system fonts for simplicity unless we fetch)
    // For now, we'll use a clean sans-serif stack

    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    background: '#F4F1DE', // color-cream
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '40px solid #B84A39', // color-terracotta
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '20px',
                        background: 'rgba(255, 255, 255, 0.4)',
                        padding: '40px 80px',
                        borderRadius: '20px',
                        border: '2px solid rgba(255, 255, 255, 0.6)',
                        boxShadow: '0 8px 32px rgba(61, 64, 91, 0.1)', // Glassmorphism-ish
                    }}
                >
                    <div
                        style={{
                            fontSize: 100,
                            fontWeight: 800,
                            color: '#B84A39', // color-terracotta
                            fontFamily: 'sans-serif',
                            marginBottom: '20px',
                        }}
                    >
                        Ciao Baby!
                    </div>
                    <div
                        style={{
                            fontSize: 40,
                            fontWeight: 600,
                            color: '#3D405B', // color-charcoal
                            fontFamily: 'sans-serif',
                            textTransform: 'uppercase',
                            letterSpacing: '4px',
                        }}
                    >
                        Armandito's Baby Shower
                    </div>
                </div>
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported opengraph-image size config
            ...size,
        }
    )
}
