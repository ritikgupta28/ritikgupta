import React, { Component } from 'react';
import $ from 'jquery';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Projects from './Components/Projects';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };
  }

  getResumeData() {
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data })
      }.bind(this),
      error: function(xhr, status, err) {
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Projects data={this.state.resumeData.projects}/>
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
