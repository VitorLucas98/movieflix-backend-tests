import './styles.css';
import { ReactComponent as StarIcon } from './star.svg';
const ReviewCard = () => {
    return (
        <div className='review-content'>
            <div className="review-info">
                <div className='review-star-icon'>
                    <StarIcon />
                </div>
                <h3 className='review-name'>Maria Silva</h3>
            </div>
            <p className='review-comment-text'>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
        </div>
    )
}

export default ReviewCard;