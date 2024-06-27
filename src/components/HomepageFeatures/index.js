import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import ImageSwitcher from './ImageSwitcher';

const FeatureList = [
  {
    title: 'Welcome',
    img: <ImageSwitcher lightimg='img/info.png' darkimg='img/info_white.png'/>,
    description: (
      <>
        This site is used to house the materials of this course.
        You can go to the first part of the course by clicking the "Start the course here!" button or you can choose a part form the navigation bar above.
      </>
    ),
  },
  {
    title: 'Timetable',
    img: <ImageSwitcher lightimg='img/calendar.png' darkimg='img/calendar_white.png'/>,
    description: (
      <>
        This is a self paced course. All the course materials can be found in this site so you can use the structure to plan your own schedule. More course information can be found from ViLLE.
      </>
    ),
  },
  {
    title: 'Exercises',
    img: <ImageSwitcher lightimg='img/tasks.png' darkimg='img/tasks_white.png'/>,
    description: (
      <>
        There will be exercises hosted in ViLLE for each part of the course. Link to ville can be found from the bottom of each page.
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div>{img}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
