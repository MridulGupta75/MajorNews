import React from 'react'
import { Link } from 'react-router-dom'
import { Article } from '../model'
import ImageRoll from './ImageRoll'

const ArticleTeaser = ({ article }: { article: Article }) => {
    return (
        <div className="fade-in">
            <Link
                to={'/article/' + article.id}
                style={{ textDecoration: 'none', color: 'inherit' }}
            >
                <div className="position-relative">
                    <ImageRoll article={article} />
                </div>

                <h4 className="mt-2 mb-0 font-weight-bolder">
                    {article.fields.headline}
                </h4>
                <p className="mt-1 mb-0">
                    <small className="text-muted font-italic">
                        {article.timeAgo}
                    </small>
                </p>
                <p className="mt-1 mb-5">{article.fields.trailText}</p>
            </Link>
        </div>
    )
}

export default ArticleTeaser
