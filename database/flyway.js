module.exports = function() {
    return {
        flywayArgs: {
            url: 'jdbc:postgresql://localhost:5432/catalog',
            schemas: 'public',
            locations: 'filesystem:../database/sql',
            user: 'ddl',
            password: 'password',
            sqlMigrationSuffixes: '.sql',
            baselineOnMigrate: true,
        },
        version: '10.11.0',
    };
};