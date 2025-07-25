# Periodensystem Backend API

Gebaut mit NestJS + PostgreSQL.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Architektur

Die Anwendung basiert:

- **elements** - Haupttabelle mit chemischen Elementen
- **categories** - Nachschlagetabelle
- **groups** - (1-18)
- **periods** - (1-7)
- **states** - (fest, flüssig, gasförmig)

### Voraussetzungen

- Node.js (Version 18+)
- PostgreSQL (Version 13+)
- npm oder yarn

### Abhängigkeiten installieren

```bash
npm install
```

### Datenbank-Konfiguration

1. Erstellen Sie eine PostgreSQL-Datenbank
2. Kopieren Sie `.development.env` zu `.env` und konfigurieren Sie die Verbindungsparameter:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=ihr_benutzername
DB_PASSWORD=ihr_passwort
DB_NAME=periodic_table
```

### Anwendung starten

```bash
# Entwicklungsmodus
npm run start:dev

# Entwicklungsmodus mit automatischem Neuladen
npm run start:dev

# Produktionsmodus
npm run start:prod
```

Die Anwendung ist unter `http://localhost:3000` verfügbar

## API-Dokumentation

### Swagger UI

- Lokal: `http://localhost:3000/api/docs`
- Produktion: `https://periodic-table-backend-nestjs-postgresql-production.up.railway.app/api/docs`

### Haupt-Endpunkte

#### Elemente

- `GET /elements` - alle Elemente abrufen
- `GET /elements/:id` - Element nach ID abrufen
- `POST /elements` - neues Element erstellen
- `PUT /elements/:id` - Element aktualisieren
- `DELETE /elements/:id` - Element löschen

#### Elementsuche

- `GET /elements-search/by-name?name=wasserstoff`
- `GET /elements-search/by-symbol?symbol=H`
- `GET /elements-search/by-group?groupId=1`
- `GET /elements-search/by-period?periodId=1`
- `GET /elements-search/by-state?stateId=1`
- `GET /elements-search/filter?name=&symbol=&groupId=1&periodId=1` - kombinierte Suche

#### Nachschlagetabellen

- `GET /categories` - alle Kategorien mit Elementen
- `GET /groups` - alle Gruppen mit Elementen
- `GET /periods` - alle Perioden mit Elementen
- `GET /states` - alle Zustände mit Elementen

## Technologie-Stack

- **Framework**: NestJS 10+
- **Datenbank**: PostgreSQL 15+
- **ORM**: Sequelize 6+
- **Dokumentation**: Swagger/OpenAPI
- **Validierung**: class-validator
- **Testen**: Jest
- **Deployment**: Railway
