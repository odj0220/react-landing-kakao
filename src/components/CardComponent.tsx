import {CardItem} from "../types/card-type";
import './CardComponent.scss';
import React from "react";

type Props = {
    item: CardItem
}

export const CardCompnent = (props: Props) => {
    const { item } = props;

    const Content = () => {
        if (item.contentImage) {
            return <div className="content">
                <img src={item.contentImage} alt="content"/>
            </div>;
        }
        return null;
    }

    const Keywords = () => {
        if (!item.keywords) {
            return null;
        }
        return (
            <div className="keywords">
                {item.keywords.map(keyword => (
                    <span>{keyword}</span>
                ))}
            </div>
        )
    }

    return (
        <div className="card-item">
            <div className="header">
                <img className="card-type" src={item.type} alt="card-type"/>
                <span className="header-text">{item.header}</span>
            </div>
            <div className="title">
                {item.title}
            </div>
            <Keywords />
            <Content />
        </div>
    );

}