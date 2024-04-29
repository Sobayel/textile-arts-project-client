import { createUserWithEmailAndPassword,GoogleAuthProvider,GithubAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const FirebaseProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };

      const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      };


      const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
      };
      const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
      };

      const logout = () => {
        signOut(auth);
        setUser(null)
      };

      
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user);
          setLoading(false);
        });
        return () => unsubscribe();
      }, []);

      const allValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logout,
        user,
        loading,
      }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;