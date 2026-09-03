// Lädt alle .svg-Dateien im Ordner './SVGs' als Text (wegen as: 'raw')
const svgModules = import.meta.glob('./SVGs/*.svg', { as: 'raw', eager: true })

// Erstelle eine Map: Dateiname -> SVG-Inhalt
const svgMap = {}
for (const [path, content] of Object.entries(svgModules)) {
    // Extrahiere den Dateinamen aus dem Pfad (z.B. './SVGs/logo.svg' -> 'logo.svg')
    const filename = path.split('/').pop()
    svgMap[filename] = content
}

// Fehler-SVG-Generator (wie gehabt)
function generateErrorSVG(filename, errorMsg) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" fill="red" opacity="0.3"/>
    <text x="50" y="50" font-family="Arial" font-size="10" text-anchor="middle" fill="black">
      <tspan x="50" dy="-1em">${filename}</tspan>
      <tspan x="50" dy="1.2em">Not Found</tspan>
      <tspan x="50" dy="1.2em">${errorMsg}</tspan>
    </text>
  </svg>`
}

export function getSvgData(filenames) {
    return filenames.map(name => {
        const cleanName = name.endsWith('.svg') ? name : `${name}.svg`
        const data = svgMap[cleanName]
        return {
            name: cleanName,
            data: data ?? generateErrorSVG(cleanName, 'File not found in static assets')
        }
    })
}