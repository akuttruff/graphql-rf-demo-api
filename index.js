const { GraphQLServer } = require('graphql-yoga');
const fs = require('fs');
const resolvers = require('./resolvers');
const typeDefs = fs.readFileSync('./typeDefs.graphql', 'UTF-8');

const context = {
  contractors: [
    {
      name: "Amie",
      id: "abc123"
    },
    {
      name: "Elise",
      id: "def456"
    },
    {
      name: "Chappy",
      id: "ghi789"
    }
  ],
  productTypes: [
    {
      name: "Solar panels",
      id: "123zyx",
      description: "Absorbs sunlight and converts it into electricity or heat"
    },
    {
      name: "Small wind turbine",
      id: "456asd",
      description: "Wind-powered generator which creates electricity as it spins"
    },
    {
      name: "Rainwater catchment systems",
      id: "23sasd",
      description: "Collects rain to redirect and utilize the water elsewhere"
    }
  ]
};

const server = new GraphQLServer({ typeDefs, resolvers, context });

server.express.get('/', (req, res) => {
  res.end('Server is running!')
});

const options = {
  port: 4000,
  endpoint: '/graphql',
  playground: '/playground'
};

const ready = ({ port }) => console.log(`graph service running - http://localhost:${port}`);

server.start(options, ready);