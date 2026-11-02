# Environment variables

DVP-MongoModels is a shared library. It reads its settings from the config of the service that uses it, by config key (for example `config.Mongo.dbname`), not by environment variable name.

- Each service that uses the library maps these config keys to the variables below in its own `config/custom-environment-variables.js`, and lists them in its own `ENVIRONMENT_VARIABLES.md`.
- `config/custom-environment-variables.js` is used only for local tests and holds only the keys the library reads.
- **Default** is what the library uses when the service does not set the key. Real hosts, URLs and secrets are never written here.
- Whenever the library starts or stops reading a config key or a variable, or a value's meaning changes, update this file in the same change. See `.claude/rules/environment-variables.md`.

## Config keys read from the service

| Config key | Variable | Description | Type | Possible values | Default | Required | Secret |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `Mongo.dbname` | `SYS_MONGO_DB` | MongoDB database name. | string | database name | — | yes | no |
| `Mongo.ip` | `SYS_MONGO_HOST` | MongoDB host(s). | host | host name or IP; comma-separated list for a replica set | — | yes | no |
| `Mongo.password` | `SYS_MONGO_PASSWORD` | MongoDB password. | string | password | — | yes | yes |
| `Mongo.port` | `SYS_MONGO_PORT` | MongoDB port. | port | 1–65535; leave empty for mongodb+srv | — | yes | no |
| `Mongo.replicaset` | `SYS_MONGO_REPLICA_SET` | MongoDB replica set name; used when SYS_MONGO_HOST lists several hosts. | string | replica set name | — | yes | no |
| `Mongo.user` | `SYS_MONGO_USER` | MongoDB user. | string | user name | — | yes | no |

## Variables read directly

Read straight from the environment by the library code. These names are reserved and never change.

None.
