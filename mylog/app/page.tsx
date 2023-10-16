import dayjs from 'dayjs';
import Latest from './Latest/latest';
import Aboutme from './component/Aboutme';

dayjs.locale('ko');

export default function Home() {
  return (
    <div>
      <Aboutme />
      <Latest />
    </div>
  );
}
