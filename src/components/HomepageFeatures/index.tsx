import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: string | React.ComponentType<React.ComponentProps<'svg'>>; // 修改为支持字符串路径和组件
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '软件部',
    Svg: '/img/software.png', // 使用直接路径
    description: (
      <>
        软件部负责人工智能挑战赛，学生节游戏平台，电子设计大赛平台的搭建测试，网站维护等工作，我们注重代码质量和团队协作，欢迎你的加入！
      </>
    ),
  },
  {
    title: '硬件部',
    Svg: '/img/hardware.png', // 使用直接路径
    description: (
      <>
        硬件部专注于硬件创新与开发，负责电子设计大赛，机器狗等比赛的开发，期待你的加入！
      </>
    ),
  },
  {
    title: '学创部',
    Svg: '/img/innovation.png', // 使用直接路径
    description: (
      <>
        学创部负责对接学校的各类科研培养项目，如星火计划、挑战杯，与企业实验室对接，帮助同学们完成人生发展规划，欢迎你的加入！
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* 判断是字符串路径时使用 <img>，否则当作 React 组件处理 */}
        {typeof Svg === 'string' ? (
          <img src={Svg} alt={title} style={{ width: '100px', height: '100px' }} />
        ) : (
          <Svg className={styles.featureSvg} role="img" />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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