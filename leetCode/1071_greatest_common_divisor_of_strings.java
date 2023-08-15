class Solution {
  public String gcdOfStrings(String str1, String str2) {
    String s1 = str1.length() > str2.length() ? str1 : str2;
    String s2 = str1.length() <= str2.length() ? str1 : str2;

    int l1 = s1.length();
    int l2 = s2.length();

    String ret = "";

    for ( int i = 0 ; i < l2 ; i++ ) {
      String dividor = s2.substring(0, i+1);

      if ( canDivide(s1, dividor) && canDivide(s2, dividor) ) {
        if ( dividor.length() > ret.length() ) {
          ret = dividor;
        }
      }
    }
    return ret;
  }

  private boolean canDivide(String divident, String dividor) {
    int l_dent = divident.length();
    int l_dor = dividor.length();

    if ( l_dent % l_dor != 0 ) return false;

    for ( int i = 0 ; i < l_dent; i++ ) {
      char c1 = divident.charAt(i);
      char c2 = dividor.charAt(i%l_dor);
      if ( c1 != c2 ) return false;
    }

    return true;
  }
}