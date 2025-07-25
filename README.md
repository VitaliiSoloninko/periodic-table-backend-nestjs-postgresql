# Periodensystem Backend API

Gebaut mit NestJS + PostgreSQL.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Architektur

Die Architektur ist modular aufgebaut:

- **elements** - Haupttabelle mit chemischen Elementen
- **groups** - (1-18)
- **periods** - (1-7)
- **states** - (fest, flüssig, gasförmig)
- **categories**

### Voraussetzungen

- Node.js (Version 18+)
- PostgreSQL (Version 13+)

### Abhängigkeiten installieren

```bash
npm install
```

### Datenbank-Konfiguration

In `.development.env` konfigurieren Sie:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=ihr_benutzername
DB_PASSWORD=ihr_passwort
DB_NAME=periodic_table
```

Wenn Sie ein Projekt ausführen, werden Datenbanktabellen automatisch erstellt.

### Anwendung starten

```bash
# Entwicklungsmodus
npm run start:dev

# Produktionsmodus
npm run start:prod
```

Die Anwendung ist unter `http://localhost:3000` verfügbar

## API-Dokumentation - Swagger UI

- Lokal: `http://localhost:3000/api/docs`
- Produktion: `https://periodic-table-backend-nestjs-postgresql-production.up.railway.app/api/docs`

### Haupt-Endpunkte

- `GET /elements` - alle Elemente abrufen
- `GET /elements/:id` - Element nach ID abrufen
- `POST /elements` - neues Element erstellen
- `PUT /elements/:id` - Element aktualisieren
- `DELETE /elements/:id` - Element löschen

- `GET /elements-search/by-name?name=wasserstoff`
- `GET /elements-search/by-symbol?symbol=H`

## Technologie-Stack

- **Framework**: NestJS 10+
- **Datenbank**: PostgreSQL 15+
- **ORM**: Sequelize 6+
- **Dokumentation**: Swagger/OpenAPI
- **Validierung**: class-validator
- **Testen**: Jest
- **Deployment**: Railway
