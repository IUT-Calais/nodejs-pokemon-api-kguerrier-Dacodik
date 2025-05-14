import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.type.deleteMany();
  await prisma.type.createMany({
    data: [
      { name: 'Normal' },
      { name: 'Fire' },
      { name: 'Water' },
      { name: 'Grass' },
      { name: 'Electric' },
      { name: 'Ice' },
      { name: 'Fighting' },
      { name: 'Poison' },
      { name: 'Ground' },
      { name: 'Flying' },
      { name: 'Psychic' },
      { name: 'Bug' },
      { name: 'Rock' },
      { name: 'Ghost' },
      { name: 'Dragon' },
      { name: 'Dark' },
      { name: 'Steel' },
      { name: 'Fairy' },
    ],
  });

  await prisma.pokemonCard.deleteMany();
  await prisma.pokemonCard.createMany({
    data:[
      {
        id: 1,
        name: 'Bulbasaur',
        pokedexId: 1,
        type: 4,
        lifePoints: 70,
        size: 0.7,
        weight: 6.9,
        imageUrl: 'https:www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/375px-Bulbizarre-RFVF.png'
      },

      {
        id: 2,
        name: 'MewTwo',
        pokedexId: 150,
        type: 11,
        lifePoints: 70,
        size: 2,
        weight: 122,
        imageUrl: 'https://www.pokepedia.fr/images/thumb/d/d8/Mewtwo-DEPS.png/375px-Mewtwo-DEPS.png'
      },

      {
        id: 3,
        name: 'Racaillou',
        pokedexId: 74,
        type: 13,
        lifePoints: 70,
        size: 0.4,
        weight: 20,
        imageUrl: 'https://www.pokepedia.fr/images/thumb/b/b2/Racaillou-RFVF.png/375px-Racaillou-RFVF.png'
      }
    ],
  });
  console.log('Seed completed!');
  await prisma.user.createMany({
    data:[
      {
        id : 1,
        name: "Adrien",
        email: "adrienflenghi@ikmail.com",
        password: "1234",
        authorId: 1
      }
    ]
  })
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
