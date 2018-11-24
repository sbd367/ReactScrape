import React, {Component} from "react";
import { Col, Row, Container } from "../../Components/Grid";
import Card from "../../Components/Card";
import API from "../../Utils/API"
import DeleteButton from "../../Components/DeleteButton";
import CommentButton from "../../Components/CommentButton";


class SavedPage extends Component{

    state = {
        Articles: [],
        Comment: "",
    }

    componentDidMount(){
        this.loadArticles();
    }

    loadArticles = () => {
        API.getSaved()
          .then(res => this.setState({ Articles: res.data}))
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

        API.addComment({Comment: this.state.Comment})
        .then(res => res)
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
                        this.state.Articles.map( article =>(
                        <Col key={article._id} size="col m12">
                            <Card 
                                key=        {article._id}
                                Summary=    {article.Summary || "No Summary"} 
                                Headline=   {article.Headline} 
                                URL=        {article.URL}
                                change=     {this.handleInputChange}
                                value=      {this.state.Comment}
                                name=       "Comment"
                                id=         {article._id}
                                clicks=     {this.handleComment}
                            ><DeleteButton click={this.deleteSaved} name={article._id}/>
                            <CommentButton name={article._id}/>
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