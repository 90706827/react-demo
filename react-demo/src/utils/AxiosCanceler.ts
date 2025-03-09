import axios, { AxiosRequestConfig, Canceler } from 'axios'

export const getPendingUrl = (config: AxiosRequestConfig) => {
  const { method, url, params, data } = config
  return [method, url, JSON.stringify(params), JSON.stringify(data)].join('&')
}

const pandingMap = new Map<string, Canceler>()

export class AxiosCanceler {
  addPending(config: AxiosRequestConfig) {
    this.removePending(config)
    const url = getPendingUrl(config)
    config.cancelToken = config.cancelToken || new axios.CancelToken((cancel) => {
      if (!pandingMap.has(url)) {
        pandingMap.set(url, cancel)
      }
    })

  }

  removeAllPending() {
    pandingMap.forEach((cancel: Canceler) => {
      if (cancel && typeof cancel === 'function') {
        cancel()
      }
      pandingMap.clear()
    })
  }

  removePending(config: AxiosRequestConfig) {
    const url = getPendingUrl(config)
    if (pandingMap.has(url)) {
      const cancel = pandingMap.get(url)
      if (cancel) {
        cancel()
      }
      pandingMap.delete(url)
    }
  }

  reset() {
    pandingMap.clear()
  }
}
