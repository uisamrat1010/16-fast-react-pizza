import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decQt, incQt } from './CartSlice';

function UpdateItemQt({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={() => dispatch(decQt(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(incQt(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQt;
