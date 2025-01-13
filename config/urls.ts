import { gdx2_cfg } from "./cfg"

const {gdx2_backend_url} = gdx2_cfg


export const gdx2_urls = {
  // delay:60,
  gdx2_url_report_count           : `${gdx2_backend_url}/report/count`,
  gdx2_url_report_author_count    : `${gdx2_backend_url}/report/author/count`,
  gdx2_url_report_list_count      : `${gdx2_backend_url}/report/list/count`,
  gdx2_url_report_subrf_count     : `${gdx2_backend_url}/report/subrf/count`,
  gdx2_url_report_org_count       : `${gdx2_backend_url}/report/org/count`,
  gdx2_url_report_area_count      : `${gdx2_backend_url}/report/area/count`,
  gdx2_url_report_field_count     : `${gdx2_backend_url}/report/field/count`,
  gdx2_url_report_lu_count        : `${gdx2_backend_url}/report/lu/count`,
  gdx2_url_report_pi_count        : `${gdx2_backend_url}/report/pi/count`,
  gdx2_url_report_vid_rab_count   : `${gdx2_backend_url}/report/vid_rab/count`,
  
  gdx2_url_report_search          : `${gdx2_backend_url}/report/query?q=`,
  


}
