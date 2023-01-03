import React, { useState } from 'react';
import { useEffect } from 'react';

import './Gallery.css';

const Gallery = ({ images=[] }) => {
    const[ currentImage, setCurrentImage ] = useState("");

    useEffect(
        ()=>{
            window.scrollTo(0,0);
        },
        []
    )

    useEffect(
        () => {
            if(images.length > 0){
                setCurrentImage(images[0]);
            }
        },
        [images]
    )
    
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
                <div className="skeleton-loader_bordered-image">
                    <div className="skeleton-loader_bordered-image__inner skeleton-loader_blink"></div>
                </div>
            )
        }
    }

    const renderImage = () => {
        if(images.length > 0){
            return (
                <div className="gallery__current-image__element">
                    <div className="gallery__current-image__element__inner">
                        <img src={images[0]} />
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="skeleton-loader skeleton-loader_image">
                    <div className="skeleton-loader_image__inner skeleton-loader_blink">

                    </div>
                </div>
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
                        {renderImage()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;