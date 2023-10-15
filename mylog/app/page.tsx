import dayjs from 'dayjs';
import Aboutme from './component/Aboutme';

dayjs.locale('ko');

export default function Home() {
  return (
    <div>
      <Aboutme />
      <h1>a</h1>
    </div>
  );
}
