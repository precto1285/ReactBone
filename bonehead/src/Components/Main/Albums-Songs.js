import React, { Component } from 'react';
import { Row, Col, Card } from 'reactstrap';
import Album from '../Sub/Album';
import Song from '../Sub/Song';

export default class AlbumSongs extends Component {
  constructor() {
    super();
    this.state = {
      album: [
        { album: 'Saro Sa Bato' },
        { album: 'Batuhan: Another 10 of Another Kind' },
        { album: 'Kargado' }
      ],
      songs: [
        { title: 'Ang Bayan Kong Sinilangan' },
        { title: 'Hari Ng Sari Sari (rough take)' },
        { title: 'Bahay Sabog (rough take)' },
        { title: 'Basag Ulo' },
        { title: 'Kargado' },
        { title: 'Walang Laman' },
        { title: 'Bahay Sabog' },
        { title: 'O.C.W.' },
        { title: 'Longganisang Maong' },
        { title: 'Anino' },
        { title: 'Paano Ba Yan' },
        { title: 'Kadugo' },
        { title: 'Hari Ng Sari Sari' },
        { title: 'Liwanag At Dilim' },
        { title: 'Snowflakes' },
        { title: 'Good Trip' }
      ]
    }
  }
  render() {
    return (
      <div className="container my-1 py-2">
        <Row>
          <Col>
            <Card>
              <div className="card-header">
                <Album album={this.state.album[1].album} />
              </div>
              <div className="card-body">
                <Song song={this.state.songs[1].title} />
                <Song song={this.state.songs[2].title} />
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div className="card-header">
                <Album album={this.state.album[0].album} />
              </div>
              <div className="card-body">
                <Song song={this.state.songs[0].title} />
              </div>
            </Card>
          </Col>

          <Col>
            <Card>
              <div className="card-header">
                <Album album={this.state.album[2].album} />
              </div>
              <div className="card-body">
                <Song song={this.state.songs[3].title} />
                <Song song={this.state.songs[4].title} />
                <Song song={this.state.songs[5].title} />
                <Song song={this.state.songs[6].title} />
                <Song song={this.state.songs[7].title} />
                <Song song={this.state.songs[8].title} />
                <Song song={this.state.songs[9].title} />
                <Song song={this.state.songs[10].title} />
                <Song song={this.state.songs[11].title} />
                <Song song={this.state.songs[12].title} />
                <Song song={this.state.songs[13].title} />
                <Song song={this.state.songs[14].title} />
                <Song song={this.state.songs[15].title} />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}