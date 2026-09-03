# Wahl-O-Memory

Ein politisches Memory-Spiel entwickelt im Rahmen des Projekts "Deine Vision 2030" von Arbeit und Leben Thüringen.

<img src="https://github.com/Wahl-O-Memory/WahlOMemory_v2/blob/main/src/assets/Logos/AL_LOGO_TH_RGB.svg" alt="Logo Arbeit und Leben Thüringen" width="200" style="height: auto;"/>

## Über das Projekt

Arbeit und Leben Thüringen führt das Projekt "Deine Vision 2030" als Teil der außerschulischen politischen Jugendbildung durch. Das Wahl-O-Memory entstand als Bildungsangebot zu verschiedenen Wahlen und wird kontinuierlich weiterentwickelt.

## Spielkonzept

Das Memory-Spiel zeigt Positionen von Parteien zu politischen Themen. Die Inhalte basieren auf Originalantworten der Parteien, die redaktionell nur minimal angepasst wurden. Parteien konnten sich zu den Thesen positionieren und ihre Priorität mittels Daumen-Symbolen (stark/mittel/kein Einsatz) kennzeichnen.

## Entwicklung

Das Spiel entstand im Juni 2024 während eines GameJams mit Jugendlichen. Die politischen Thesen wurden in Workshops und Online-Umfragen mit jungen Menschen erarbeitet.

## Technische Umsetzung

Die Webanwendung wurde von Jugendlichen programmiert. Besonderer Dank gilt Lasse und Christian für die Entwicklung.

Das Projekt ist als Vue.js-Anwendung mit Vue Router umgesetzt. Für die eigene Nutzung beachten Sie:
1. **API-Konfiguration**<br>
Der API-Endpunkt muss in `/src/api/config.js` angepasst werden:
   ```json
   "endpoint": "https://ihre-api-url.de"
   ```
2. **Router-Konfiguration**<br> 
Bei Deployment muss der Server so konfiguriert sein, dass alle Pfade auf index.html geleitet werden
3. **Projekt-Setup**<br>
Zum lokalen Testen der Website:
   ```bash
   npm install
   npm run dev
   ```
4. **Statischer Modus**<br>
Wenn die Nutzung eines Backends nicht gewünscht ist kann die Seite auch im static-Modus genutzt werden. Dafür muss in `/src/api/config.js` `UseBackend` auf `false` gesetzt werden, und die Logos und Dateien in `/src/api/StaticModeAssets/` hinzugefügt werden.

## Förderung
Das Projekt wird gefördert durch:
- Thüringer Ministerium für Bildung, Jugend und Sport (Landesjugendförderplan)<br><img src="https://github.com/Wahl-O-Memory/WahlOMemory_v2/blob/main/src/assets/Logos/TMBJS_F%C3%B6rderhinweis.png" alt="Logo Arbeit und Leben Thüringen" width="200" style="height: auto;"/>
- Bundesministerium für Familie, Senioren, Frauen und Jugend (Kinder- und Jugendplan)<br><img src="https://github.com/Wahl-O-Memory/WahlOMemory_v2/blob/main/src/assets/Logos/BMFSFJ%20gef%C3%B6rdert%20vom.jpg" alt="Logo Arbeit und Leben Thüringen" width="200" style="height: auto;"/>

## Lizenz

Die Webanwendung und alle zugehörigen Materialien stehen unter einer Open Educational Resources (OER) Lizenz. Die Nutzung, Anpassung und Verbreitung ist bei Nennung der Quelle frei möglich.
