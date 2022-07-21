import React from 'react';
import {Card, CardContent, CardMedia,Button} from "@material-ui/core";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import fb from "../config/firebase";
import { makeStyles } from '@material-ui/core/styles';
import '../Screens/style.css'


const useStyles = makeStyles((theme) => ({
  // root: {
  //   width: '100%',
  //   // maxWidth: '40ch',
  //   backgroundColor: theme.palette.background.paper,
  // },
  inline: {
    display: 'inline',
      fontSize:28,
  },
    root: {
      display: 'flex',
         width:'60%',
         marginBottom:'3%',
         // border:" 1px solid black",
         padding:'2%',
        borderRadius:10,
        height:180,

  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 auto',
      // position:"relative",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
    li:{
      marginLeft:'25%',
      alignContent:"center",

    },
    group:{
      flex:1,
      // flexDirection:'column',
        position:'absolute',
    },
    group1:{
      // flex:1,
        position:'absolute',
        marginLeft:'45%',

    },
    img:{
      borderRadius:10,
        width:'50%',
        marginLeft:'40%',
    },
    main:{

    },
}));


function User(props) {
    const classes = useStyles();
    const [post , setPost] = React.useState([])
     React.useEffect(() => {
      fb.firestore().collection('users').onSnapshot((snapshot) => {
          const newPost = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
          }))
          setPost(newPost)

      })
  },[])


    function del(id){
         fb.firestore().collection("users").doc(id).delete().then(() => {
    console.log("Document successfully deleted!");
}).catch((error) => {
    console.error("Error removing document: ", error);
});
    }
    return (
        <List className={classes.li} >
          {post.map(post => (
                  <Card className={classes.root}>
                      <div className={classes.details}>
                          <CardContent className={classes.content}>
                              <Typography component="h5" variant="h6">
                                  {post.username}
                              </Typography>
                               <Typography component="h5" variant="h6">
                                  {post.email}
                              </Typography>
                          </CardContent>
                            <Button type="submit"
                                  variant="contained"
                                  className='btn' onClick={() => del(post.id)}>Remove
                          </Button>
                      </div>
                  </Card>
          ))}
    </List>
    );
}

export default User;