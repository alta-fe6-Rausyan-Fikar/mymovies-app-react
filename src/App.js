import Layout from './components/Layout';
import React, { Component } from 'react';
import Card from './components/Card';

export default class App extends Component {
  state = {
    data: [
      {
        id: 1,
        image: 'https://image.tmdb.org/t/p/w500/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg',
        content: 'asa',
        title: 'Jurassic World Dominion',
      },
      {
        id: 2,
        image: 'https://image.tmdb.org/t/p/w500/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg',
        content: 'asa',
        title: 'Fantastic Beasts: The Secrets of Dumbledore',
      },
      {
        id: 3,
        image: 'https://image.tmdb.org/t/p/w500/neMZH82Stu91d3iqvLdNQfqPPyl.jpg',
        content: 'asa',
        title: 'The Lost City',
      },
      {
        id: 4,
        image: 'https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg',
        content: 'asa',
        title: 'Sonic the Hedgehog 2',
      },
      {
        id: 5,
        image: 'https://image.tmdb.org/t/p/w500/QaNLpq3Wuu2yp5ESsXYcQCOpUk.jpg',
        content: 'asa',
        title: 'Memory',
      },
      {
        id: 6,
        image: 'https://image.tmdb.org/t/p/w500/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg',
        content: 'asa',
        title: 'The Northman',
      },
      {
        id: 7,
        image: 'https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg',
        content: 'asa',
        title: 'Doctor Strange in the Multiverse of Madness',
      },
      {
        id: 8,
        image: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
        content: 'asa',
        title: 'The Batman',
      },
      {
        id: 9,
        image: 'https://image.tmdb.org/t/p/w500/rJPGPZ5soaG27MK90oKpioSiJE2.jpg',
        content: 'asa',
        title: 'The Contractor',
      },
      {
        id: 10,
        image: 'https://image.tmdb.org/t/p/w500/7qop80YfuO0BwJa1uXk1DXUUEwv.jpg',
        content: 'asa',
        title: 'The Bad Guys',
      },
      {
        id: 11,
        image: 'https://image.tmdb.org/t/p/w500/wxP2Mzv9CdjOK6t4dNnFGqIQl0V.jpg',
        content: 'asa',
        title: 'Top Gun: Maverick',
      },
      {
        id: 12,
        image: 'https://image.tmdb.org/t/p/w500/hepwOZWJNUmLzB68gKYEdEJAaD3.jpg',
        content: 'asa',
        title: 'Fireheart',
      },
      {
        id: 13,
        image: 'https://image.tmdb.org/t/p/w500/cpWUtkcgRKeauhTyVMjYHxAutp4.jpg',
        content: 'asa',
        title: 'Interceptor',
      },
      {
        id: 14,
        image: 'https://image.tmdb.org/t/p/w500/z8VpsTdIjBhdeGeNEsHFwz6MJXp.jpg',
        content: 'asa',
        title: 'Redeeming Love',
      },
      {
        id: 15,
        image: 'https://image.tmdb.org/t/p/w500/abPQVYyNfVuGoFUfGVhlNecu0QG.jpg',
        content: 'asa',
        title: 'Pils Adventures',
      },
      {
        id: 16,
        image: 'https://image.tmdb.org/t/p/w500/ejXBuNLvK4kZ7YcqeKqUWnCxdJq.jpg',
        content: 'asa',
        title: 'Gold',
      },
      {
        id: 17,
        image: 'https://image.tmdb.org/t/p/w500/fVf4YHHkRfo1uuljpWBViEGmaUQ.jpg',
        content: 'asa',
        title: 'Hustle',
      },
      {
        id: 18,
        image: 'https://image.tmdb.org/t/p/w500/rkpLvPDe0ZE62buUS32exdNr7zD.jpg',
        content: 'asa',
        title: 'Dog',
      },
      {
        id: 19,
        image: 'https://image.tmdb.org/t/p/w500/tfdfh1mK24VujxT5z11732asxdR.jpg',
        content: 'asa',
        title: 'Operation Mincemeat',
      },
      {
        id: 20,
        image: 'https://image.tmdb.org/t/p/w500/ewrIYKTLaqerwznGzNhmqr0huTs.jpg',
        content: 'asa',
        title: 'An Egg Rescue',
      },
    ],
  };

  render() {
    return (
      <Layout>
        <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 m-2 gap-3">
          {this.state.data.map((item) => (
            <Card key={item.id} title={item.title} content={item.content} image={item.image} />
          ))}
        </div>
      </Layout>
    );
  }
}
