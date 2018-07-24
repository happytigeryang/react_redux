// class PrivateRouteContainer extends React.Component {
//     render() {
//       const {
//         isAuthenticated,
//         component: Component,
//         ...props
//       } = this.props
  
//       return (
//         <Route
//           {...props}
//           render={props =>
//             isAuthenticated
//               ? <Component {...props} />
//               : (
//               <Redirect to={{
//                 pathname: '/login',
//                 state: { from: props.location }
//               }} />
//             )
//           }
//         />
//       )
//     }
//   }
  
//   const PrivateRoute = connect(state => ({
//     isAuthenticated: state.authReducer.isAuthenticated
//   }))(PrivateRouteContainer)
  
//   const Login = connect(null, dispatch => ({
//     login: () => {
//       dispatch(authSuccess())
//       dispatch(push('/'))
//     }
//   }))(LoginContainer)
  
//   const Home = connect(null, dispatch => ({
//     logout: () => {
//       dispatch(authFail())
//       dispatch(push('/login'))
//     }
//   }))(HomeContainer)
  
//   render(
//     <Provider store={store}>
//       <ConnectedRouter history={history}>
//         <Switch>
//           <Route path="/login" component={Login} />
//           <PrivateRoute exact path="/" component={Home} />
//         </Switch>
//       </ConnectedRouter>
//     </Provider>,
//     document.getElementById('root'),
//   )