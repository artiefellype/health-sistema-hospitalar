import { Collapse } from 'antd';
import React from 'react';

const { Panel } = Collapse;

const App: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header="Hemograma" key="1">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Hendrerit gravida rutrum quisque non tellus orci ac. Ornare arcu odio ut sem nulla pharetra diam sit.</p>
      </Panel>
      <Panel header="Cálcio" key="2">
        <p>Fermentum et sollicitudin ac orci phasellus. Donec massa sapien faucibus et molestie ac feugiat sed. 
            Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. In mollis nunc sed id semper risus.
            Posuere ac ut consequat semper. Ac feugiat sed lectus vestibulum mattis. Laoreet non curabitur gravida 
            arcu ac tortor. Et magnis dis parturient montes nascetur ridiculus mus mauris. Elementum sagittis vitae et leo duis ut diam. 
            Amet volutpat consequat mauris nunc congue nisi vitae. Diam in arcu cursus euismod quis viverra.</p>
      </Panel>
      <Panel header="CPK" key="3">
      <p>Fermentum et sollicitudin ac orci phasellus. Donec massa sapien faucibus et molestie ac feugiat sed. 
            Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. In mollis nunc sed id semper risus.
            Posuere ac ut consequat semper. Ac feugiat sed lectus vestibulum mattis. Laoreet non curabitur gravida 
            arcu ac tortor. Et magnis dis parturient montes nascetur ridiculus mus mauris. Elementum sagittis vitae et leo duis ut diam. 
            Amet volutpat consequat mauris nunc congue nisi vitae. Diam in arcu cursus euismod quis viverra.</p>
      </Panel>
      <Panel header="UREIA E CREATINA" key="4">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Hendrerit gravida rutrum quisque non tellus orci ac. Ornare arcu odio ut sem nulla pharetra diam sit.</p>
      </Panel>
      <Panel header="COLESTEROL E TRIGLICERÍDEOS" key="5">
        <p>Fermentum et sollicitudin ac orci phasellus. Donec massa sapien faucibus et molestie ac feugiat sed. 
            Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. In mollis nunc sed id semper risus.
            Posuere ac ut consequat semper. Ac feugiat sed lectus vestibulum mattis. Laoreet non curabitur gravida 
            arcu ac tortor. Et magnis dis parturient montes nascetur ridiculus mus mauris. Elementum sagittis vitae et leo duis ut diam. 
            Amet volutpat consequat mauris nunc congue nisi vitae. Diam in arcu cursus euismod quis viverra.</p>
      </Panel>
      <Panel header="TGO (AST) E TGP (ALT)" key="6">
      <p>Fermentum et sollicitudin ac orci phasellus. Donec massa sapien faucibus et molestie ac feugiat sed. 
            Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. In mollis nunc sed id semper risus.
            Posuere ac ut consequat semper. Ac feugiat sed lectus vestibulum mattis. Laoreet non curabitur gravida 
            arcu ac tortor. Et magnis dis parturient montes nascetur ridiculus mus mauris. Elementum sagittis vitae et leo duis ut diam. 
            Amet volutpat consequat mauris nunc congue nisi vitae. Diam in arcu cursus euismod quis viverra.</p>
      </Panel>
      <Panel header="TSH E T4 LIVRE" key="7">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Hendrerit gravida rutrum quisque non tellus orci ac. Ornare arcu odio ut sem nulla pharetra diam sit.</p>
      </Panel>
      <Panel header="ELETROCARDIOGRAMA" key="8">
        <p>Fermentum et sollicitudin ac orci phasellus. Donec massa sapien faucibus et molestie ac feugiat sed. 
            Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. In mollis nunc sed id semper risus.
            Posuere ac ut consequat semper. Ac feugiat sed lectus vestibulum mattis. Laoreet non curabitur gravida 
            arcu ac tortor. Et magnis dis parturient montes nascetur ridiculus mus mauris. Elementum sagittis vitae et leo duis ut diam. 
            Amet volutpat consequat mauris nunc congue nisi vitae. Diam in arcu cursus euismod quis viverra.</p>
      </Panel>
    </Collapse>
  );
};

export default App;