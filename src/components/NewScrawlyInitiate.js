import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class NewScrawlyInitiate extends Component {

    handleSubmit(event) {
        event.preventDefault();
        this.props.createScrawl(this.props.title, this.props.slug);
    }

    render() {
        return (
            <div>
                <section className="bg-blue">
                    <h1>INITIALISER UN SCRAWLY</h1>
                </section>
                <section className="container form-new">
                    <form onSubmit={event => this.handleSubmit(event)}>
                        <div>
                            <label htmlFor="title">Titre</label><br/>
                            <input type="text" name="title" value={this.props.title}
                                   onChange={event => this.props.updateTitle(event.target.value)} placeholder="Anniversaire de Johny"/>
                        </div>
                        <div>
                            <label htmlFor="slug">Slug</label><br/>
                            <input type="text" name="slug" value={this.props.slug}
                                   onChange={event => this.props.updateSlug(event.target.value)} placeholder="Slug du scrawly"/>
                        </div>
                        <NavLink to='/ScrawlyEdit' type="submit" className="button btn">
                            <i className="fa fa-long-arrow-right"> <strong>Créer votre Scrawly & ajouter des dates
                                !</strong></i>
                        </NavLink>
                    </form>
                </section>

            </div>
        );
    }
}

export default NewScrawlyInitiate;

