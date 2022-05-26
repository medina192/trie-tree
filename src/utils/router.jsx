import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { TrieTree } from '../assets/TrieTree';

import { Search } from '../components/Search';

export const BaseRouter = () => {
 
  /*
  useEffect(() => {

      const tree = new TrieTree(['fedos', 'alex']);
      //tree.insert('hoka');
      //tree.insert('fifi');
      //tree.insert('fif');
      //tree.insert('fia');
      //tree.insert('fip');
      tree.insert('alexis');
      tree.insert('alejandro');
      tree.insert('fed');
      tree.insert('fedelobo');
      //tree.insert('f');
      //tree.insert('v');
      //tree.insert('');
      console.log('tree', tree);
      console.log('contains true', tree.contains('fifi'));
      console.log('contains false', tree.contains('ola'));
      console.log('contains false', tree.contains('ho'));
      console.log('contains false', tree.complete('f'));
      console.log('contains false', tree.complete('a'));

  }, [])
  */
 
  return (
    <>
      <Search />
    </>
  );
};

// <Route exact path="/" component={Search} />