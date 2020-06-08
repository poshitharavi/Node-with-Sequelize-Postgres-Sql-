CREATE DATABASE logistic;

CREATE TABLE area (
    areaid BIGSERIAL PRIMARY KEY NOT NULL,
    areaname VARCHAR(100) NOT NULL,
    postalcode INTEGER NOT NULL,
    createdby VARCHAR(50) NOT NULL,
    createdat DATE NOT NULL,
    updatedby VARCHAR(50),
    updatedat DATE
);