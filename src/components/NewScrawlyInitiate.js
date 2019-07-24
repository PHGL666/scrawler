import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class NewScrawlyInitiate extends Component {

    handleSubmit(event) {
        event.preventDefault();
        if (!this.props.loading) {
            this.props.createScrawl({
                title: this.props.title,
                slug: this.props.slug
            });
        }
    }

    render() {
        if (this.props.id) {
            return <Redirect to={"/ScrawlyEdit/"}/>
        }
        return (
            <div>
                <section className="bg-blue">
                    <h1>INITIALISER VOTRE SCRAWLY</h1>
                </section>
                <section className="container form-new">
                    <form onSubmit={event => this.handleSubmit(event)}>
                        <div>
                            <label htmlFor="title">Titre</label><br/>
                            <input type="text" name="title" value={this.props.title}
                                   onChange={event => this.props.updateTitle(event.target.value)}
                                   placeholder="Titre du Scrawly"/>
                        </div>
                        <div>
                            <label htmlFor="slug">Slug</label><br/>
                            <input type="text" name="slug" value={this.props.slug}
                                   onChange={event => this.props.updateSlug(event.target.value)}
                                   placeholder="Slug du Scrawly"/>
                        </div>
                        <button type="submit" className="button btn">
                            <i className={"fa " + (this.props.loading ? "fa-spinner fa-pulse" : "fa-long-arrow-right")}>
                                <strong> Créer votre Scrawly & ajouter des dates
                                    !</strong></i>
                        </button>
                    </form>
                    <p>{this.props.error}</p>
                </section>

            </div>
        );
    }
}

export default NewScrawlyInitiate;
