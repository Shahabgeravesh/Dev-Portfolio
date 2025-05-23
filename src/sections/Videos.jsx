import React from 'react';

function Videos() {
  return (
    <div style={{
      width: '100%',
      minHeight: '400px',
      backgroundColor: '#f8f9fa',
      padding: '40px 20px',
      margin: '20px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px'
    }}>
      <h2 style={{
        fontSize: '2.5rem',
        color: '#2c3e50',
        marginBottom: '20px'
      }}>
        Featured Videos
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        width: '100%',
        maxWidth: '1200px'
      }}>
        {/* Video 1 */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0
          }}>
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              src="https://www.youtube.com/embed/KLlIpfHWbEE?rel=0"
              title="Video 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div style={{ padding: '20px' }}>
            <h3 style={{ marginBottom: '10px' }}>Video 1</h3>
            <a 
              href="https://youtu.be/KLlIpfHWbEE"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#2196f3',
                textDecoration: 'none',
                fontWeight: '500'
              }}
            >
              Watch on YouTube
            </a>
          </div>
        </div>

        {/* Video 2 */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0
          }}>
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              src="https://www.youtube.com/embed/v4O2t-3-as8?rel=0"
              title="Video 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div style={{ padding: '20px' }}>
            <h3 style={{ marginBottom: '10px' }}>Video 2</h3>
            <a 
              href="https://youtu.be/v4O2t-3-as8"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#2196f3',
                textDecoration: 'none',
                fontWeight: '500'
              }}
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videos; 