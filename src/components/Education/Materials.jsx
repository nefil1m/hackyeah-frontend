import React, { Fragment } from 'react';
import { Provider, Consumer, TabContent } from '../common/Tabs';
import { Image } from 'react-bootstrap';

const Materials = () => (
  <main className="container education">

    <h1>Some shit about bad practices</h1>
    <Provider>
      <Consumer>
        {({ setActiveTab }) => (
          <Fragment>
            <div>
              <TabContent index="0"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in facilisis nisi, quis dapibus orci. Vestibulum in justo sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas in luctus quam. Nunc laoreet sollicitudin nunc eget fringilla. Integer sodales nunc quis risus ornare, vel viverra enim rhoncus. Nam fermentum quam ut lacus finibus bibendum. Cras mollis sollicitudin enim, scelerisque fermentum mi. Nulla ut pellentesque libero, et finibus sapien. Cras consectetur diam non tristique dapibus. Aenean interdum nec leo eget imperdiet. Sed vel enim varius, vehicula nibh eu, faucibus ipsum. Proin posuere id risus vel volutpat. Donec nec porta lorem, et imperdiet lectus. Aenean mattis eros in interdum euismod. In vitae tortor velit.</p></TabContent>
              <TabContent index="1"><p>Phasellus dignissim urna quis ultricies eleifend. Phasellus imperdiet efficitur libero eu efficitur. In ac est nec lectus ullamcorper lacinia. Suspendisse id sapien sed elit porttitor tempus ut ac augue. In hac habitasse platea dictumst. Duis metus justo, pulvinar eu arcu ut, finibus maximus est. Nam vel iaculis elit, eu vestibulum metus.</p></TabContent>
              <TabContent index="2"><p>In at egestas magna. Sed non ligula dolor. Morbi pulvinar odio id vulputate laoreet. Nunc id pretium neque. Maecenas vulputate quis lacus non tempor. In mollis at dui sed ullamcorper. Aliquam pretium congue nunc ultricies euismod. Nam vel varius mi. Aenean ante arcu, dictum in velit eget, vestibulum tincidunt arcu. Aliquam quis semper turpis, eget malesuada dui. Nullam nec est porttitor, laoreet dolor non, consequat lectus.</p></TabContent>
              <TabContent index="3"><p>Donec id varius risus, nec tincidunt diam. Aenean id ante orci. Cras facilisis fringilla ex faucibus tempus. Vivamus eu orci vel tellus faucibus ultrices nec quis diam. Cras at congue ex, faucibus volutpat dolor. Phasellus in felis at orci pellentesque sagittis. Etiam nec nulla et leo pretium iaculis sed in nunc. Sed non ligula sem. Nullam iaculis sodales erat a condimentum. Cras nec sapien gravida erat finibus cursus quis ac mi.</p></TabContent>
            </div>
            <div>
              <div onClick={() => setActiveTab(0)}>
                <Image roundedCircle src="https://source.unsplash.com/random" />
              </div>
              <div onClick={() => setActiveTab(1)}>
                <Image roundedCircle src="https://source.unsplash.com/random" />
              </div>
              <div onClick={() => setActiveTab(2)}>
                <Image roundedCircle src="https://source.unsplash.com/random" />
              </div>
              <div onClick={() => setActiveTab(3)}>
                <Image roundedCircle src="https://source.unsplash.com/random" />
              </div>
            </div>
          </Fragment>
        )}
      </Consumer>
    </Provider>
  </main>
);

export {
  Materials,
};