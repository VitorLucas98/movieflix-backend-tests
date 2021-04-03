import './styles.css';
import { ReactComponent as StarIcon } from './star.svg';
import { Review } from '../../../../../../utils/types';

type Props = {
    review: Review;
}
const ReviewCard = ({review}: Props) => {
    return (
        <div className='review-content'>
            <div className="review-info">
                <div className='review-star-icon'>
                    <StarIcon />
                </div>
                <h3 className='review-name'>{review.user.name}</h3>
            </div>
            <p className='review-comment-text'>{review.text}</p>
        </div>
    )
}

export default ReviewCard;