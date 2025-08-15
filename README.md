# CubeClock

Eine interaktive 3D-Uhr als Webseite – Uhrzeit und Datum erscheinen auf den Flächen eines animierten Würfels.  
Der Würfel kann per Maus oder Touch gedreht werden.  
Zusätzlich gibt es ein **Einstellungsmenü** (Zahnrad), um Farben anzupassen  
und einen **Auto-Reset** nach Inaktivität zu konfigurieren.

---

## ✨ Funktionen

- **3D-Würfel** mit sechs Flächen:
  - Stunde, Minute, Sekunde, Jahr, Monat, Tag
- **Umschalten Uhr ↔ Datum**
  - Per Klick auf den „Spacebar“-Button oder durch Drücken der Leertaste
- **Farbanpassung**:
  - Jede Fläche, der Würfelhintergrund und der Seitenhintergrund sind frei wählbar
  - Eigener Farbdialog mit RGB-Eingabe und Sättigung/Helligkeit-Feld
  - Farben werden im `localStorage` gespeichert
- **Auto-Reset**:
  - Nach einstellbarer Zeit (Standard **10s**) wird der Würfel automatisch in die Standardansicht zurückgedreht
  - Auto-Reset kann ein- oder ausgeschaltet werden
- **Responsive Design**:
  - Funktioniert auf Desktop und Mobil
  - Unterstützt als **Progressive Web App (PWA)** mit Service Worker

---

## 📂 Aufbau---

## ⚙️ Bedienung

1. **Starten**:  
   Öffne die `index.html` im Browser oder hoste sie auf einem Webserver.

2. **Drehen**:  
   - **Maus**: Linke Maustaste gedrückt halten und ziehen  
   - **Touch**: Finger auf dem Bildschirm ziehen

3. **Ansicht wechseln**:  
   - Spacebar drücken  
   - Oder auf den „Spacebar“-Button klicken

4. **Einstellungen**:
   - Zahnrad-Icon anklicken
   - Farbfeld (Chip) auswählen, um den Farbpicker zu öffnen
   - Auto-Reset aktivieren/deaktivieren oder Zeit in Sekunden festlegen

---

## 💾 Speicherung

- Alle Farben und Auto-Reset-Einstellungen werden im **`localStorage`** des Browsers gespeichert.
- Beim ersten Start:
  - Auto-Reset = **aktiv**  
  - Zeit = **10 Sekunden**  
  - Standardfarben werden geladen

---

## 🛠️ Technologie

- **HTML5**, **CSS3** (Flexbox, 3D-Transforms, Media Queries)
- **JavaScript** (DOM-Manipulation, Event Listener)
- **localStorage** (für Einstellungen)
- **Canvas** für die Farbauswahl (S/V-Fläche)

---

## 📜 Lizenz

Dieses Projekt kannst du frei verwenden, anpassen und weitergeben.  
Für den Einsatz in kommerziellen Projekten bitte vorher prüfen,  
ob verwendete Assets (Icons, Schriftarten) lizenziert sind.

---


---

Viel Spaß beim Ausprobieren! 🎉
