import React, { Component } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { Link, NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []

                  };

        this.getPostsList = this.getPostsList.bind(this);



    }


    componentDidMount() {

        var url = 'https://thesmartwallet.com/wp-json/wp/v2/posts?post_type=post&_embed&status=publish'
        axios.get(url).then(res => {


            this.setState({

                posts: res.data

            });


        })


    }


    getPostsList(postsList)  {




    return  postsList.map(post =>{

        var id = post.id;
        var title = post.title['rendered'];
        var excerpt = post.excerpt['rendered'];


        return(


    <div  key={ id } className="row">
    <div className="col s12 m6 offset-m3">
      <div className="card-panel hoverable blue darken-1">
        <div className="card-content white-text">
          <span className="card-title">{  ReactHtmlParser( title ) }</span>
          {  ReactHtmlParser(excerpt) }
        </div>
        <div className="card-action right-align">
          <Link className="white-text" to={ '/post/' + id } >view post <i class="tiny material-icons">arrow_forward</i> </Link>

        </div>
      </div>
    </div>
  </div>



        )

        });


    }

    render() {


        const { posts } = this.state;

        const postList = this.getPostsList(posts);


        return(

           <div className="container">

               { postList }

           </div>
        )

    }


}

export default Home;
