import React, {Component}  from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { Link, NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: [],
            title: [],
            excerpt: []
        }


    }

    componentDidMount() {



        let postid = this.props.match.params.id;
        let url = 'https://thesmartwallet.com/wp-json/wp/v2/posts/';





       axios.get(url+postid).then(res => {

           var title =  res.data.title['rendered'];
           var excerpt =  res.data.excerpt['rendered'];

           this.setState({

               id: [...this.state.id, postid],
               title: [...this.state.title, title],
               excerpt: [...this.state.excerpt, excerpt]

           });


           console.log(this.state);

       });




    }


    render() {


    return (
        <div className="container">
        <div className="card-panel blue darken-4  white-text">
        <h4 className="left-align"> { ReactHtmlParser(this.state.title) } </h4>
        <p className="left-align">Post id { this.state.id }  with excerpt:  {  ReactHtmlParser(this.state.excerpt)  } </p>

         <div className="card-action right-align">

          <Link className="white-text" to='/'> back</Link>

         </div>

        </div>
        </div> )

    }


};

export default Post;
