import React, { useContext } from 'react';
import Layout from '../components/Layout';
import { PageStyle } from '../components/Common/CardStyles';
import { UserContext } from '../contexts/UserContext';
import LeftPane from '../components/Layout/LeftPane';

function Dashboard() {
  const { user } = useContext(UserContext);


  return (
    <Layout>
      <main className="w-full p-4 h-screen overflow-y-scroll" style={PageStyle}>
        {/* <SearchUser /> */}
        <div className="mx-auto max-w-7xl flex">
          <div className='w-full flex flex-col lg:flex-row gap-4 '>
            <div className='lg:flex lg:flex-col lg:w-1/5 gap-4'>
              <LeftPane user={user} theme={'purple'} />
            </div>
            <section className="lg:w-4/5 flex flex-col">
               
            </section>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Dashboard