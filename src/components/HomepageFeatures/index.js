import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import LogoBanner from '@site/static/img/logobanner.svg';

const FeatureList = [
  {
    title: 'About Us',
    description: (
      <>
        GDGoC are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome.
        By joining a GDGoC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.
      </>
    ),
  },
  {
    title: 'Vision',
    description: (
      <>
       To cultivate an engaging and vibrant community of cybersecurity enthusiasts while paving the way for a safer digital world.
      </>
    ),
  },
  {
    title: 'Mission',
    description: (
      <>
        We foster learning, collaboration, and innovation in cybersecurity through engaging CTF challenges and community activities. 
        By providing opportunities to enhance skills and build connections,
        we empower individuals to contribute meaningfully to digital security in our rapidly evolving technological landscape.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* Display the logo banner once at the top */}
        <div className="text--center margin-bottom--lg">
          <LogoBanner className={styles.featureSvg} role="img" style={{ maxHeight: '75px' }} />
        </div>
        
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}