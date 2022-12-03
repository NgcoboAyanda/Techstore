import React, { useState } from 'react';

import './Gallery.css';

const Gallery = ({ images=[] }) => {
    const[ currentImage, setCurrentImage ] = useState(images[0])

    console.log(currentImage)

    const renderGalleryItemClass = (image) => {
        if(image === currentImage){
            return "gallery__sidebar__item_selected"
        }
    }

    const renderGallerySidebarThumbnails = () => {
        if(images.length > 0){
            //if images array is not empty
            let count = 0;
            return images.map( image=> {
                count++;
                return (
                    <div className={`gallery__sidebar__item ${renderGalleryItemClass(image)}`} key={count} onClick={()=>setCurrentImage(image)}>
                        <div className="gallery__sidebar__item__inner">
                            <img src={image} />
                        </div>
                    </div>
                )
            });
        }
        else {
            //if images array is empty
            return (
                <div className="gallery__sidebar__skeleton"></div>
            )
        }
    }

    const renderCurrentImage = () => {
        if(currentImage){
            return (
                <div className="gallery__current-image__element">
                    <div className="gallery__current-image__element__inner">
                        <img src={currentImage} />
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="gallery__current-image__skeleton"></div>
            )
        }
    }

    return (
        <div className="gallery">
            <div className="gallery__inner">
                <div className="gallery__sidebar">
                    <div className="gallery__sidebar__inner">
                        {renderGallerySidebarThumbnails()}
                    </div>
                </div>
                <div className="gallery__current-image">
                    <div className="gallery__current-image__inner">
                        {renderCurrentImage()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;