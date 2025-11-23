import './navigation.css';
import Button from '../button/Button';
import { navigationConfig } from '../../config/navigationConfig';

export default function Navigation() {
  return (
    <div className='navigation-container'>
      <div className='navigation-layout'>
        <div>
          <p>Logo</p>
        </div>
        <div>
          {navigationConfig.map((button) => (
            <Button variant={button.variant} id={button.id} key={button.id}>
              {button.label}
            </Button>
          ))}
        </div>
        <div>
          <Button
            variant='primary'
            id='feedback'
            style={{ padding: '.75rem', borderRadius: '2rem' }}
          >
            Feedback
          </Button>
        </div>
      </div>
    </div>
  );
}
