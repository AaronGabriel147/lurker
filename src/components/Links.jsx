import React from 'react';

export default function Links({ setSubReddit }) {

    return (
        <div className="btn-cont">
            <p id="links" onClick={() => setSubReddit('all')}>ALL</p>
            <p id="links" onClick={() => setSubReddit('spaceporn')}>SPACE</p>
            <p id="links" onClick={() => setSubReddit('historyporn')}>HISTORY</p>
            <p id="links" onClick={() => setSubReddit('dataisbeautiful')}>DATA IS BEAUTIFUL</p>
            <p id="links" onClick={() => setSubReddit('cats')}>CATS</p>
            <p id="links" onClick={() => setSubReddit('aiart')}>AI ART</p>
        </div>
    )
}