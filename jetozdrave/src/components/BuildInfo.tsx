interface BuildInfo {
    buildDate: string;
    version: string;
}

function BuildInfo() {
    // These will be replaced at build time by Vite
    const buildDate = import.meta.env.VITE_BUILD_DATE || new Date().toISOString();
    const version = import.meta.env.VITE_APP_VERSION || "dev";
    const branch = import.meta.env.VITE_BRANCH || "local";

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const shortVersion = typeof version === 'string' && version.length > 7 
        ? version.substring(0, 7) 
        : version;

    return (
        <div style={{
            position: 'fixed',
            bottom: '10px',
            right: '10px',
            fontSize: '11px',
            color: '#666',
            background: 'rgba(255,255,255,0.9)',
            padding: '6px 10px',
            borderRadius: '6px',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(0,0,0,0.1)',
            zIndex: 1000,
            fontFamily: 'monospace',
            lineHeight: '1.3',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
            <div><strong>JeToZdrave</strong></div>
            <div>Build: {formatDate(buildDate)}</div>
            <div>Commit: {shortVersion}</div>
            <div>Branch: {branch}</div>
        </div>
    );
}

export default BuildInfo;
