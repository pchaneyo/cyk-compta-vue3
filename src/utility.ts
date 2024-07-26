import loglevel from "loglevel";
import { defineStore } from "pinia";
const logger = loglevel.getLogger('utility.ts');
logger.setLevel('debug');

// export const linkArticle = (art_id: number) => "/single-post?art_id=" + art_id;

/**
 * function devMode
 * if we are using Vite then the server is at localhost:3000
 * @param url 
 * @returns 
 */
export const devMode = (url: string): string => {
  let result = url;
  if (import.meta.env.DEV) {
    result = "//localhost:3000" + url;
  }
  return result;
};

/**
 * function urlServer
 * returns URL object to the API Server
 */
const urlServer = (): URL => {
  let originServer;
  if (import.meta.env.DEV) {
    // vite server -> server is local NodeJS port 3000
    originServer = "http://localhost:3000";
  } else {
    originServer = window.location.origin;
  }

  console.log("originServer", originServer);

  const url1 = new URL(originServer);
  return url1
}

export interface User {
  user_id?: number;
  user_name?: string;
  user_email?: string;
  user_password?: string | undefined;
  user_access?: string
}


export const useStore = defineStore('store', {
  state: () => ({
    public_access: false,
    title: "CykBlog",
    subtitle: "0.5",
    image: "",
    currentUser: undefined as User | undefined,
    authorized: false
  }),
  actions: {
    setCurrentUser(user: User | undefined) {
      this.currentUser = user
      if (user) {
        this.authorized = true
      }
      else {
        this.authorized = this.public_access
      }
    }
  }
})

/**
 * function currentuser
 */
export const getCurrentUser = async (): Promise<User | undefined> => {

  let user: User | undefined

  user = await fetchServer('/api/currentuser')
  useStore().setCurrentUser(user)

  return user
}

/**
 * function signin
 * @param username 
 * @param password 
 */
export const signin = async (username: string, password: string): Promise<User> => {

  try {
    let user_name: string | undefined;
    let user_email: string | undefined;
    if (username.indexOf("@") !== -1) {
      user_email = username;
    } else {
      user_name = username;
    }
    const payload: User = {
      user_name: user_name,
      user_email: user_email,
      user_password: password,
    };

    const result: User = (await fetchServer('/api/signin', undefined, 'post', payload)).content as User
    useStore().setCurrentUser(result)

    return result
  } catch (err) {
    logger.error(err)
    throw String(err);
  }
}

/**
 * function signout
 */
export function signout() {
  window.location.href = (urlServer().origin + '/api/signout')
}

interface Tab {
  name: string
  url: string
  window: Window
}

class WindowTabManager {

  openedTabs: Map<string, Tab> = new Map<string, Tab>()

  constructor(moduleName: string) {
    const currentWindowName = window.name
    const newName = window.location.origin + ' ' + moduleName
    if (currentWindowName === newName) {
      logger.debug('window.name ALREADY equals to ' + newName)
    }
    else {
      logger.debug('window.name changed from ' + currentWindowName + ' to ' + newName)
      window.name = newName
    }
  }

  /**
   * method openTab
   * @param tabname 
   * @param url 
   */
  openTab(tabname: string, pathname: string, searchParams: { name: string, value: string }[] | undefined) {

    const url1 = urlServer()
    if (searchParams) {
      searchParams.forEach(({ name, value }) => {
        url1.searchParams.append(name, value)
      })
    }

    const url = url1.origin + pathname + url1.search

    const openedTab = this.openedTabs.get(tabname)
    if (openedTab && !openedTab.window.closed) {
      logger.debug('tab already opened just focus')
      openedTab.window.focus()
    }
    else {
      logger.debug('tabname ' + tabname + ' not found will window.open() ')
      const newWindowName = window.location.origin + ' ' + tabname
      const newWindow = window.open(url, newWindowName)
      if (!newWindow) {
        throw 'WindowTabManager unable to open ' + url + ' to a window named ' + newWindowName
      }
      this.openedTabs.set(tabname, { name: tabname, url, window: newWindow })
    }
  }
}

export const windowTabManager = new WindowTabManager('blog_viewer')

/**
 * function fetchServer
 * @param pathname 
 * @param searchParams 
 * @param method 
 * api must return json object
 */
export const fetchServer = async (pathname: string,
  searchParams?: { name: string, value: string }[] | undefined,
  method?: 'get' | 'post' | undefined,
  payload?: any): Promise<any> => {
  let result: any
  try {
    const url = urlServer()
    if (searchParams) {
      searchParams.forEach(({ name, value }) => {
        url.searchParams.append(name, value)
      })
    }
    const url2 = url.origin + pathname + url.search
    const requestInit: RequestInit = { credentials: "include", method: method || 'get' }
    if (payload) {
      requestInit.headers = { "Content-Type": "application/json" }
      requestInit.body = JSON.stringify(payload)
    }
    const resp = await fetch(url2, requestInit)
    if (resp.ok) {
      if (resp.headers.get('Content-Type')?.startsWith('application/json'))
        result = await resp.json()
    }
    else {
      const contentType = resp.headers.get('content-type');

      if (contentType && contentType.includes('application/json')) {
        const data = await resp.json()
        if (data.hasOwnProperty("message")) {
          throw data.message
        }
      }
      let msgerr = url2.toString() + ' Error ' + resp.status + ' -> ' + await resp.text()
      throw msgerr
    }
    return result
  }
  catch (err) {
    logger.error(err)
    throw err
  }
}
