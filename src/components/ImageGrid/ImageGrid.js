import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';
import { loadImages } from '../../actions/actions';
import Button from '../Button/index';

const key = 'c8ac06eded170381782c8f855b9bf5f12bc6020cfa83bb5415466f81b0cdeba5';

class ImageGrid extends Component {
    // state = {
    //     images: [],
    // };

    componentDidMount() {
        this.props.loadImages();
    }

    render() {

        const { images, error, isLoading, loadImages } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                </section>
                {
                    error ? <div className='error'>{JSON.stringify(error)}</div> : null
                }

                <Button onClick={() => !isLoading && loadImages()} loading={isLoading}>
                    LOAD
                </Button>
            </div>
        );
    }
}

const mapStateToProps = ({ isLoading, images, error }) => ({
    isLoading,
    images,
    error
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages())
})
export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);