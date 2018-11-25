import React, {Component} from "react";
import { Col, Row, Container } from "../../Components/Grid";
import Card from "../../Components/Card";
import API from "../../Utils/API"
import DeleteButton from "../../Components/DeleteButton";
import CommentButton from "../../Components/CommentButton";
import Modal from "../../Components/Modal";


class SavedPage extends Component{

    state = {
        Articles: [],
        Comments: [],
        content: "",
    }

    componentDidMount(){
        this.loadArticles();
        
    }

    loadArticles = () => {

        API.getSaved()
          .then(res => {
              this.setState({ Articles: res.data });
              console.log(this.state)
        })
          .catch(err => err);
    };

    handleInputChange = event => {
        event.preventDefault();

        const { name, value } = event.target;
        console.log(name)
        console.log(value)
        this.setState({[name]: value})

    }

    handleComment = event => {
        event.preventDefault()

        let commentRequest = {
            content: this.state.content,
            articleId: event.target.name
        }

        console.log(commentRequest)

        API.addComment(commentRequest)
        .then(res => res)
        .catch(err => err)
    }

    getComments = event =>{
        event.preventDefault();

        let theId = event.target.name;
        console.log(theId)
        API.getComments(theId)
        .then(res => {

            let comments = [];

            for(var i = 0; i <= res.data.length; i++){
             return comments.push(res.data[i].content)
             }
            console.log(comments)
        })
        .catch(err => err)
    }

    getSaved = () => {
        API.getSaved()
        .then(res => res)
        .catch(err => err)
    };

    deleteSaved = event => {
        event.preventDefault();

        API.deleteSaved(event.target.name)
        .then(res => res)
        .catch(err => err)

        this.loadArticles();
    }

    render(){
        return(
            <Container fluid>
                <Row>
                    {
                        this.state.Articles.map( article => (
                            <Col key={article._id} size="col m12">
                                <Card 
                                    key=        {article._id}
                                    Summary=    {article.Summary || "No Summary"} 
                                    Headline=   {article.Headline} 
                                    URL=        {article.URL}
                                    value=      {this.state.content}
                                    id=         {article._id}
                                >
                                
                                <DeleteButton click={this.deleteSaved} name={article._id}/>
                                <CommentButton click={this.getComments} name={article._id}/>

                                <Modal 
                                    name=       "content" 
                                    id=         {article._id} 
                                    comments=    {article.Headline} 
                                    change=     {this.handleInputChange} 
                                    clicks=     {this.handleComment} 
                                />
                                </Card>
                            </Col>

                        ))
                    }
                </Row>
            </Container>
        );
    }

}
export default SavedPage;