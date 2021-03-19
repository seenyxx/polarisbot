import db from 'quick.db';
// Key value storage

export class PersistentCacheConnection {
  private namespace = 'persistentcache'
  
  constructor(namespace?: string) {
    this.namespace = namespace ? namespace : 'persistentcache'
  }

  set(name: string, value: any) {
    db.set(this.buildQuery(name), value)
  }

  get(name: string) {
    return db.get(this.buildQuery(name))
  }

  push(name: string, val: any) {
    db.push(this.buildQuery(name), val)
  }

  add(name: string, val: number) {
    db.add(this.buildQuery(name), val)
  }

  remove(name: string) {
    db.delete(this.buildQuery(name))
  }
  removeAll() {
    db.delete(this.buildQuery())
  }
  private buildQuery(name?: string) {
    return `${this.namespace}${name ? `.${name}` : ''}`
  }
}