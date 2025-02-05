-- CreateTable
CREATE TABLE "Type" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PokemonCard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "pokedexId" INTEGER NOT NULL,
    "type" INTEGER NOT NULL,
    "lifePoints" INTEGER NOT NULL,
    "size" REAL NOT NULL,
    "weight" REAL NOT NULL,
    "imageUrl" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Type_name_key" ON "Type"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PokemonCard_name_key" ON "PokemonCard"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PokemonCard_pokedexId_key" ON "PokemonCard"("pokedexId");

-- CreateIndex
CREATE UNIQUE INDEX "PokemonCard_type_key" ON "PokemonCard"("type");
