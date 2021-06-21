import React,{FC} from 'react';
import { IPhotosReducer } from '../../../reducers/photosReducers';
import { IState } from '../../../reducers';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import useDropdown from 'react-dropdown-hook';
import {EntitiesFilterMenu} from '../Entities/EntitiesFilterMenu'

import { Entity } from './Entity';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import { DisplayControls, EntitiesContainer, EntitiesControlBar, EntitiesHeader, EntitiesPage, EntityListControls } from '../../_Components/Common/Entities';
import { StandardInput } from '../../_Components/Common/Common';

import SettingsIcon from '@material-ui/icons/Settings';
import SortIcon from '@material-ui/icons/Sort';
import FilterListIcon from '@material-ui/icons/FilterList';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import ShareIcon from '@material-ui/icons/Share';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ListIcon from '@material-ui/icons/List';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
export const Entities:FC=()=> {

    const {photosList}=useSelector<IState,IPhotosReducer>(globalState=>globalState.photos)
    let [companies,setCompany]= useState([
    {name:'World company SAS',thumbnail:photosList[10].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'World company SAS',thumbnail:photosList[10].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'World company SAS',thumbnail:photosList[10].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'World company SAS',thumbnail:photosList[10].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'World company SAS',thumbnail:photosList[10].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'World company SAS',thumbnail:photosList[10].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'World company SAS',thumbnail:photosList[10].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'Subsid Corp Ltd',thumbnail:photosList[10].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'Subsid Corp Ltd',thumbnail:photosList[11].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'Subsid Corp Ltd',thumbnail:photosList[11].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'Subsid Corp Ltd',thumbnail:photosList[11].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'Subsid Corp Ltd',thumbnail:photosList[11].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'Subsid Corp Ltd',thumbnail:photosList[11].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'Subsid Corp Ltd',thumbnail:photosList[11].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'Subsid Corp Ltd',thumbnail:photosList[11].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'ABC generic company',thumbnail:photosList[12].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'ABC generic company',thumbnail:photosList[12].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'ABC generic company',thumbnail:photosList[12].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'ABC generic company',thumbnail:photosList[12].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'ABC generic company',thumbnail:photosList[12].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'ABC generic company',thumbnail:photosList[12].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'ABC generic company',thumbnail:photosList[12].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'ABC generic company',thumbnail:photosList[12].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'ABC generic company',thumbnail:photosList[12].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'World company SAS',thumbnail:photosList[10].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'World company SAS',thumbnail:photosList[10].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'World company SAS',thumbnail:photosList[10].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'World company SAS',thumbnail:photosList[10].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'World company SAS',thumbnail:photosList[10].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'World company SAS',thumbnail:photosList[10].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'World company SAS',thumbnail:photosList[10].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'Subsid Corp Ltd',thumbnail:photosList[10].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'Subsid Corp Ltd',thumbnail:photosList[11].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'Subsid Corp Ltd',thumbnail:photosList[11].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'Subsid Corp Ltd',thumbnail:photosList[11].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'Subsid Corp Ltd',thumbnail:photosList[11].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'Subsid Corp Ltd',thumbnail:photosList[11].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'Subsid Corp Ltd',thumbnail:photosList[11].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'Subsid Corp Ltd',thumbnail:photosList[11].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'ABC generic company',thumbnail:photosList[12].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'ABC generic company',thumbnail:photosList[12].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'ABC generic company',thumbnail:photosList[12].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'ABC generic company',thumbnail:photosList[12].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'ABC generic company',thumbnail:photosList[12].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'ABC generic company',thumbnail:photosList[12].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'ABC generic company',thumbnail:photosList[12].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'ABC generic company',thumbnail:photosList[12].url, address:'Caracas 1050, Distro Capital, Venezuela'},
    {name:'ABC generic company',thumbnail:photosList[12].url, address:'Caracas 1050, Distro Capital, Venezuela'}
  ])

  const [searchInput,setSearchInput] = useState('')
  const [sort, setSort] = useState(true)
  const [wrapperRef, dropdownOpen, toggleDropdown]=useDropdown();
  let [fullscreen,setFullscreen] = useState(true)
  let [displayModeList,setDisplayModeList] = useState(false)

  function toggleFullscreen(){
    console.log('toggleFullscreen')
    setFullscreen(!fullscreen)
  }

  function sortEntities() {
      if(sort === true){
          setCompany(companies.sort((a,b) => 0 - (a.name > b.name ? -1 : 1)))
          setSort(false);
          console.log(companies)
      }
      else{
          setCompany(companies.sort((a,b) => 0 - (a.name > b.name ? 1 : -1)))
          setSort(true);
      }
  }
  function setMosaic(){
    setDisplayModeList(false)
  }
  function setList(){
    setDisplayModeList(true)
  }

    return (
      <EntitiesPage>
      <div className={fullscreen === true?(''):('fullscreen')}> 
      <EntitiesControlBar>           
            <EntitiesHeader>
              <h3>Entities</h3>
              <DisplayControls>
                <IconButton color="primary" onClick={setMosaic}>
                  <AppsIcon/>
                </IconButton>
                <IconButton color="primary"onClick={setList}>
                  <ListIcon/>
                </IconButton>
              </DisplayControls>

            </EntitiesHeader>
            <EntityListControls>
            <Button
                variant="contained"
                //color="secondary"
                endIcon={<ArrowDropDownIcon />}
              >
                All
            </Button>
            <IconButton color="primary">
              <MoreHorizIcon/>
            </IconButton>
            <Button
                variant="contained"
                //color="secondary"
                endIcon={<SortIcon />}
                onClick={sortEntities}
              >
                Sort
            </Button>
            <Button
                variant="contained"
                //color="secondary"
                endIcon={<FilterListIcon/>}
                onClick={toggleDropdown}
              >
                Filter
            </Button>
            <IconButton
             color="primary"
             onClick={toggleFullscreen}
             >
              <ZoomOutMapIcon/>
            </IconButton>
            <Button
              variant="contained"
              //color="secondary"
              endIcon={<ShareIcon/>}
              onClick={() => navigator.clipboard.writeText('http://localhost:3000/Entities')}
            >
              Share
            </Button>
            <StandardInput
              placeholder="Search..."
              onChange={event =>{setSearchInput(event.target.value)}}
            />
          </EntityListControls>
          
            
          </EntitiesControlBar>
          {
            dropdownOpen &&
            <EntitiesControlBar>
              <EntitiesFilterMenu/>
            </EntitiesControlBar>
          }
        <EntitiesContainer>
        <div className={displayModeList === true?('list'):('mosaic')}> 
          {companies.filter((value)=>{
                  if(searchInput===''){
                      return value;
                  }else if(value.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())) {
                      return value;
                  };
              }).map(company=>(
            <Entity title={company.name} imageUrl={company.thumbnail} adress={company.address}/>
          ))}
          </div>
        </EntitiesContainer>
        </div>
        </EntitiesPage>
    );
  }